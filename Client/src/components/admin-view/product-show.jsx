import { Card,CardContent,CardFooter } from '@/components/ui/card'
import { Button } from "../ui/button";
import React from 'react'



function productShow({products}) {
  return (
    <Card className='w-full max-w-sm mx-auto'>
        <div>
            <div className='relative'>  
                <img src={products?.image} alt={products.title}  className='w-full h-[300px] object-cover rounded-t-lg'/>
            </div>

            <CardContent>
                <h2 className='text-xl font-bold mb-2'>{products?.title}</h2>
                <div className='flex justify-between items-center mb-2'>
                  <span className={`${
                    products?.salePrice >0 ?"line-through " : ""
                  } text-lg font-semibold text-primary`}>${products?.price}</span>
                  {products?.salePrice >0 ?(
                    <span className='text-lg font-bold'>${products?.salePrice}</span>
                  ):null}
                </div>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
              <Button 
                onClick={()=>{
                  setOpenCreateProductDialog(true)
                  setCurrentEditedId(products?._id);
                  setFromData(products)
                }}>
                Edit
                </Button>
                <Button onClick={()=>handleDelete(products?._id)}>Delete</Button>
            </CardFooter>
        </div>
    </Card>
  )
}

export default productShow