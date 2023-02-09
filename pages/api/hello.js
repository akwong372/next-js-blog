export default function handler(req, res) {
    res.status(200).json({
        test: 'more test',
        stuff: 'other stuff',
        number: 123
    });
}