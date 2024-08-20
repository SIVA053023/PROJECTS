let quote=document.getElementById('Quote')
let button=document.getElementById('one')


const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "To love and be loved is to feel the sun from both sides. - David Viscott",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "Courage is not the absence of fear, but the triumph over it. - Nelson Mandela",
    "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. - Eleanor Roosevelt",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "The measure of intelligence is the ability to change. - Albert Einstein",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr."
];
 const useIndexes=new Set()


function QuoteGenerator(){
    while(true){
        const randomIndex = Math.floor(Math.random() * quotes.length);
        if(useIndexes.has(randomIndex)) continue;
        quote.innerHTML=quotes[randomIndex]
        break;
    }
   
}
    



