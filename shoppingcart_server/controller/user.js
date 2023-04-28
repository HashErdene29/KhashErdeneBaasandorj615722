let users = [{ username: 'John', password: '123'}, {username: 'Smith', password: '111' }];

const signIn = (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = username + '-' + Date.now().toString();

    return res.status(200).json({ token });
};

module.exports = { signIn };