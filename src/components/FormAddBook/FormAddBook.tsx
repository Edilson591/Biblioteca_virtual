import { Input } from "../Input/Input"


function FormAddBook() {
        return(
            <form>
                <label htmlFor=""></label>
                <Input type="text" onChange={FormAddBook} value="" placeholder="" id=""/>
            </form>
        )
}

export default FormAddBook