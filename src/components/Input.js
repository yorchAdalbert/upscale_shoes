const Input = () => {

    const handle = (event) => {
        const vowels = [65, 69, 73, 79, 85]
        for (let i = 0; i < vowels.length; i++) {
            if (event.keyCode === vowels[i]) { 
                console.log(vowels[i])
                event.preventDefault()
            }
        }
    }

    return (
    <>
        <input type='text' onKeyDown={handle}></input>
    </>
    )
}

export default Input