import React from 'react';
import Form from "next/form";
import {addCar, getCar} from "@/app/services/api-servise";

  const CarsPage =  async() => {
  
      const c = await getCar();
      console.log(c);
      return (
        <div>
            <Form action={addCar} >
                <input type="text" name={'price'} placeholder={'price'}/>
                <input type="text" name={'year'} placeholder={'year'}/>
                <input type="text" name={'brand'} placeholder={'brand'}/>
                <button>submit</button>
            </Form>
        </div>
    );
};


export default CarsPage;