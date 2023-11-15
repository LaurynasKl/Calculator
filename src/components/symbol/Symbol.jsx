const symbol = {
    display: 'grid',
    gap: '1rem',
    padding: '1rem',
    fontSize: '1rem',
};
const btn = {
    justifyContent: 'center',
    fontSize: '2rem',
};
export function Symbol(){
    return(
        <div style={symbol}>
            <button style={btn}>+</button>
            <button style={btn}>-</button>
            <button style={btn}>*</button>
            <button style={btn}>/</button>
        </div>
    );
}