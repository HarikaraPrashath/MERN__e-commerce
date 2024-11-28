  import { Button } from '../../components/ui/button'
  import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../../components/ui/sheet'
  import React, { Fragment, useState , useEffect} from 'react'
  import CommonFrom from '../../components/common/form';
  import { addProductFormElement } from '../../config/index';
  import ProductImageUpload from '../../components/admin-view/images'
  import {
    addNewProduct,
    fetchAllProducts,
  } from "../../store/admin/product-slice/index";

  import { useDispatch, useSelector } from "react-redux";
  import { toast } from '@/hooks/use-toast';

import AdminProductShow  from '../../components/admin-view/product-show'



  const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: '',
  };
  
  function products() {

    const[openCreateProductDialog,setOpenCreateProductDialog]=useState(false)
    const[formData,setFormData] = useState(initialFormData)
    const[imageFile,setImageFile]=useState(null)
    const[uploadImageUrl,setUploadImageUrl]=useState('')
    const[imageLoadingState,setImageLoadingState] = useState(false)
    const [currentEditedId, setCurrentEditedId] = useState(null);

    
    //const { productList } = useSelector((state) => state.adminProducts);
    const [productList,setProductList] = useState([])

    const dispatch = useDispatch();


    //submission method
    function onsubmit(event){
      event.preventDefault();
      dispatch(addNewProduct({
        ...formData,
        image:uploadImageUrl
      })).then((data)=>{
        console.log(data);
        if(data?.payload?.success){
          dispatch(fetchAllProducts())
          setOpenCreateProductDialog(false)
          setImageFile(null)
          setFormData(initialFormData)
          toast({
            title:'Product add Successfully'
          })
        }
      })
      
    }
  

    //get Product method
    useEffect(() => {
      dispatch(fetchAllProducts()).then((response) => {
       const fetchProducts = response?.payload|| [] 
       setProductList(fetchProducts)
       console.log("fetch",fetchProducts)
      });
    }, [dispatch]);
   

    return (
      <Fragment>

    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        { productList.length > 0 ? (
          productList.map((productItem) => (
            <AdminProductShow key={productItem.id} product={productItem}  />
          ))
        ) : (
          <div className="w-full">No products</div>
        )}
      </div>

    
        <div className="mb-5 w-full flex justify-end">
          <Button onClick={()=>setOpenCreateProductDialog(true)}>
            Add New Product
          </Button>
        </div>
       

        
        <Sheet
          open={openCreateProductDialog}
          onOpenChange={(isOpen) => setOpenCreateProductDialog(isOpen)}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <ProductImageUpload 
              imageFile={imageFile} // Correct
              setImageFile={setImageFile}
              uploadImageUrl={uploadImageUrl} 
              setUploadImageUrl={setUploadImageUrl} 
              setImageLoadingState={setImageLoadingState}
              imageLoadingState={imageLoadingState}
            />
            <div className='py-6'>
            <CommonFrom
                onSubmit={onsubmit}
                formControls={addProductFormElement} 
                formData={formData}
                setFormData={setFormData}
                buttonText='Add'
              />
            </div>
          </SheetContent>
        </Sheet>
      </Fragment>
    )
  }

  export default products 