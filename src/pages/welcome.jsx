
function welcome({ user }) {
  return (
    <>
      <div className=" flex flex-col m-16 justify-center items-center rounded-2xl border-1 border-gray-400  ">
        <h1 className="m-4 text-xl md:text-3xl ">Welcome to bluelearn !!!</h1>
        <h1 className=" flex flex-col justify-center items-center m-4 text-xl md:text-3xl ">Where <span className="text-blue-600 text-3xl md:text-5xl font-bold" >Talent</span> meets <span className="text-yellow-400 text-3xl md:text-5xl font-bold">Opportunity</span></h1>
      </div>
    </>
  )
}
export default welcome