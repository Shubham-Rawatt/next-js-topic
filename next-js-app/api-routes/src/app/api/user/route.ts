import { NextRequest, NextResponse } from "next/server";

// -- NextRequest / NextResponse

// -->  GET Method
export async function GET() {
    return NextResponse.json({
        id: '1',
        name: 'api',
        age: 16,
        message: 'hello i am next js api'
    })
}


// -->  POST Method

export async function POST(req:NextRequest){
    let {id,name,age,message}= await req.json()
    return NextResponse.json({
        id,name,age,message
    })
}


// -->  PUT Method

export async function PUT(req:NextRequest){
    let{id,name,age,message} = await req.json()
    return NextResponse.json({
        id,name,age,message
    })
}