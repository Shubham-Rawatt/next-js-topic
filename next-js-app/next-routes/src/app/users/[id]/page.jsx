
const page = async({params}) => {
    const userName = await params
    console.log(userName)
  return (
    <div className="text-center">user name is {userName.id} </div>
  )
}

export default page