export default function Header({ value, onChange, onSubmit }) {
  const searchImg = new URL('../assets/search.png', import.meta.url).href
  return (
    <header className="flex flex-col md:flex-row justify-center items-center w-full gap-8 p-8 mb-10 bg-violet-200">
      <h1 className="font-bold text-3xl text-gray-800">Weathher Forecast</h1>
      <form className="flex" onSubmit={onSubmit}>
        <input className="rounded-md shadow-md px-1" type="text" placeholder="try: Rome, IT" value={value} onChange={onChange}></input>
        <button type="submit">
          <img className="w-4 ml-1" src={searchImg} />
        </button>
      </form>
    </header>
  )
}