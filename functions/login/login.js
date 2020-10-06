// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const authFailed = (message = "authentication failed") => ({
    statusCode: 401,
    body: JSON.stringify({ message }),
});

exports.handler = async (event, context) => {
    try {
        if (!event.body) return authFailed("username and password required");
        const { username, password } = JSON.parse(event.body);

        if (!(username && password)) {
            return authFailed("invalid username password combination");
        }

        if (!(username === "admin" && password === "123")) {
            return authFailed("invalid username password combination");
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "access granted" }),
        };
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};
