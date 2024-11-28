import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label'
import { Select } from '../ui/select'
import React from 'react'
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

function form({formControls,formData,setFormData,onSubmit,buttonText}) {


function renderInputsByComponentType(getControlItem){
  let element = null;
  const value = formData[getControlItem.name] || ''




  switch (getControlItem.componentType) {
    case 'input':
      element = (
      <Input
      name={getControlItem.name}
      placeholder={getControlItem.label}
      id={getControlItem.name}
      type={getControlItem.type}
      value={value}
      onChange={event => setFormData({
        ...formData,
        [getControlItem.name]:event.target.value
      })}
      />
      )
      
      break;

      case 'select':
  element = (
    <Select
      onValueChange={(selectedValue) =>
        setFormData({
          ...formData,
          [getControlItem.name]: selectedValue,
        })
      }
      value={formData[getControlItem.name] || ''}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={getControlItem.placeholder } />
      </SelectTrigger>
      <SelectContent>
        {getControlItem.options?.map((optionItem) => (
          <SelectItem key={optionItem.id} value={optionItem.id}>
            {optionItem.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
  break;

        
        case 'textarea':
          element = (
          <Textarea
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          value={value}
          onChange={event => setFormData({
            ...formData,
            [getControlItem.name]:event.target.value
          })}
          />
          )
          
          break;
      
  
    default:
      element =(
      <Input
      name={getControlItem.name}
      placeholder={getControlItem.placeholder}
      id={getControlItem.name}
      type={getControlItem.type}
      value={value}
      onChange={event => setFormData({
        ...formData,
        [getControlItem.name]:event.target.value
      })}
      />)

      break;
  }
  return element
}


  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3'>
        {
          formControls.map(controlItem=><div className='grid w-full gap-1.5' key={controlItem.name}>
            <Label className=''>{controlItem.label}</Label>
            {
              renderInputsByComponentType(controlItem)
            }
          </div>)
        }
      </div>
      <Button type="submit" className='mt-2 w-full'>{buttonText || 'Submit'}</Button>
    </form>
  )
}

export default form