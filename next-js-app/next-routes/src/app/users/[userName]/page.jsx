
const page = async({params}) => {
    const name = await params
    // console.log(userName)
  return (
    <div className="text-center">user name is {name.userName} </div>
  )
}

export default page