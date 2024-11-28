
export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];


export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElement =[
{
  label:"Title",
  name:"title",
  componentType:"input",
  type:"text",
  placeholder:"Enter Product Title"
},
{
  label:"Description",
  name:"description",
  componentType:"textarea",
  placeholder:"Enter Product description"
},
{
  label:"Category",
  name:"category",
  componentType:'select',
  options:[
    {id:"men",label:"Men"},
    {id:"women",label:"Women"},
    {id:"kids",label:"Kids"},
    {id:"accessories",label:"Accessories"},
    {id:"footware",label:"Footware"},
  ]
},
{
  label:"Brand",
  name:"brand",
  componentType:"select",
  options:[
    {id:"nike",label:"Nike"},
    {id:"adidas",label:"Adidas"},
    {id:"puma",label:"Puma"},
    {id:"levi",label:"Levi"},
    {id:"zara",label:"Zara"},
    {id:"h&m",label:"H&M"},
  ]
},
{
  label:"Price",
  name:"price",
  componentType:"input",
  type:"number",
  placeholder:"Enter Product Price"
},
{
  label:"Sale Price",
  name:"salePrice",
  componentType:"input",
  type:"number",
  placeholder:"Enter Sale Price (optional)"
},
{
  label:"Total Stock",
  name:"totalStock",
  componentType:"input",
  type:"number",
  placeholder:"Enter Total Stock"
},

]
