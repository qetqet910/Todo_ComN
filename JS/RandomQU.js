
const R = Math.floor(Math.random() * 10);
const Q_q = document.querySelector('.q');
const Q_a = document.querySelector('.a');
const Object_Q = [
    {
        qoute: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        Author: '-Mother Teresa-'    
    },
    {
        qoute: 'When you reach the end of your rope, tie a knot in it and hang on.',
        Author: '-Franklin D. Roosevelt-'    
    },
    {
        qoute: 'Always remember that you are absolutely unique. Just like everyone else.',
        Author: '-Margaret-'    
    },
    {
        qoute: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        Author: '-Robert Louis Stevenson-'    
    },
    {
        qoute: 'The future belongs to those who believe in the beauty of their dreams.',
        Author: '-Eleanor Roosevelt-'    
    },
    {
        qoute: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        Author: '-Benjamin Franklin-'    
    },
    {
        qoute: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
        Author: '-Helen Keller-'    
    },
    {
        qoute: 'It is during our darkest moments that we must focus to see the light.',
        Author: '-Aristotle-'    
    },
    {
        qoute: 'Whoever is happy will make others happy too.',
        Author: '-Anne Frank-'    
    },
    {
        qoute: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        Author: '-Ralph Waldo Emerson-'    
    }
];
const Q = Object_Q[R].qoute;
const A = Object_Q[R].Author

Q_q.innerText = Q;
Q_a.innerText = A;