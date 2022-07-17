

const Wave = (props: {className: string}) => {
    return (
        <svg className={"max-h-[80px] w-full " + props.className } id="visual" viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none">
            <path d="M0 157L32 153.5C64 150 128 143 192 158.3C256 173.7 320 211.3 384 231.8C448 252.3 512 255.7 576 234.5C640 213.3 704 167.7 768 167.7C832 167.7 896 213.3 928 236.2L960 259L960 301L928 301C896 301 832 301 768 301C704 301 640 301 576 301C512 301 448 301 384 301C320 301 256 301 192 301C128 301 64 301 32 301L0 301Z" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
    )
}

export default Wave