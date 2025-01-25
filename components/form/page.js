
export default function Form() {
    return (
        <div>
            <form action="/submit" method="get">
                <label id="summary">
                    Search:
                </label>
                <input type="text" name="search"></input>
                <button type="submit"> Search </button>
            </form>
        </div>



    );
}