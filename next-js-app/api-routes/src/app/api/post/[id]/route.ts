import { NextRequest, NextResponse } from "next/server";

interface paramsType {
  params: {
    id: number;
  };
}

export async function GET(req: NextRequest, { params }: paramsType) {
  let { id } = params;
  return NextResponse.json({
    postId: id,
  });
}



/*
    -->     practice code api methods


     export async function GET() {
     
        return NextResponse.json({
            id: 1,
            name:'api',
            version : 16
        })
     }



     export async funtion POST(req: NextRequest){
     let {id , name , version} = await req.json()
        return NextResponse.json({
            id, name, version
     })
     
     }



*/