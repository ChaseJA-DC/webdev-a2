const axios = require('axios');

module.exports = async () => {
    try {
        const result = await axios.get('https://collectednotes.com/webdevdemonstration.json');
        return {
            posts: result.data.notes.map(note => ({
                title: note.title,
                path: `${note.path}`,
                body: note.body // Include the full note content
            }))
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            posts: []
        };
    }
};
