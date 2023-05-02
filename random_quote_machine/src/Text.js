

function Text(props) {
    let ind = props.value;
    const quoteArray = [
        {quote:"To live is the rarest thing in the world. Most people exist, that is all.", author:"Oscar Wilde"},
        {quote:"It is better to be hated for what you are than to be loved for what you are not.", author:"Andre Gide"},
        {quote:"If you tell the truth, you don't have to remember anything.", author:"Mark Twain"},
        {quote:"In three words I can sum up everything I've learned about life: it goes on.", author:"Robert Frost"},
        {quote:"You only live once, but if you do it right, once is enough.", author:"Mae West"},
        {quote:"A room without books is like a body without a soul.", author:"Marcus Tullius Cicero"},
        {quote:"It is during our darkest moments that we must focus to see the light.", author:"Aristotle"},
        {quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.", author:"Benjamin Franklin"},
        {quote:"I can accept failure, everyone fails at something. But I can't accept not trying.", author:"Michael Jordan"},
        {quote:"The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart.", author:"Helen Keller"}
    ];



    return (
        <div id="text-cont">
            <div id="text">
                <p style={{color: props.color, transitionDuration: "2s"}}><i className="fa fa-quote-left" style={{fontSize: '4rem'}}></i> {quoteArray[ind].quote} </p>
            </div>
            <div id="author">
                <p style={{color: props.color, transitionDuration: "2s"}}> - {quoteArray[ind].author}</p>
            </div>
        </div>
    );
}

export default Text;