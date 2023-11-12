import KeyBoard from "./KeyBoard";
function StyleButton(props) {
    function changeTextColor() {
        props.textStyle(function (prev) {
            const newStyle = { ...prev };
            { newStyle.color === 'red' ? newStyle.color = 'black' : newStyle.color = 'red' }
            return newStyle;
        })
    }
    function changeTextFont() {
        props.textStyle(function (prev) {
            const newStyle = { ...prev };
            newStyle.fontFamily = newStyle.fontFamily === 'Arial' ? 'Cantarell' : 'Arial';
            return newStyle;
        })
    }

    function changeToUpperCase() {
        props.textStyle(prev => {
            const newStyle = { ...prev };

            // Assuming there is a property called 'text' in the style object
            if (newStyle.text) {
                newStyle.text = newStyle.text.toUpperCase();
            }

            return newStyle;
        });
    }
    function changeToFifteen() {
        props.textStyle(function (prev) {
            const newStyle = { ...prev };
            newStyle.fontSize = newStyle.fontSize === '20px' ? '16px' : '20px';
            return newStyle;
        })
    }
    return (
        <div>
            <button onClick={changeTextColor}>Red</button>
            <button onClick={changeTextFont}>change Font</button>
            <button onClick={changeToFifteen}>20px</button>
        </div>)
}
export default StyleButton;