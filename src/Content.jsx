import { createRoot } from "react-dom/client";
import DictionaryPopup from "./components/DictionaryPopup";

const container = document.createElement('div');
document.body.append(container);
const root = createRoot(container);


document.addEventListener('keydown', (event)=>{
    const selectedTextObj = window.getSelection();
    const wordSelected = selectedTextObj.toString().trim();
    if(event.altKey && selectedTextObj.toString().trim() !== ''){
            const rect = selectedTextObj.getRangeAt(0).getBoundingClientRect();
            root.render(<DictionaryPopup word={wordSelected} top={rect.top} left={rect.left} width={rect.width} height={rect.height} />)
    }
})

document.addEventListener("selectionchange", ()=>{
    const selectedText = window.getSelection();
     if (selectedText.isCollapsed) {
        root.render(null);
    }
})