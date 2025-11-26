
const page = async({params}) => {

    const userName = await params
    console.log(userName);
    

  return (
    <div>
        contact user name is {userName.name}
    </div>
  )
}

export default page