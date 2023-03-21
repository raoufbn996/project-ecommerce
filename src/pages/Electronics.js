import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

export const Electronics = () => {
    const {products}=useContext( ProductContext);
    const filteredProductsElectronics = products.filter(item=>{
        return(item.category === "electronics" ); 
      });
  return (
    <div >
        <div className='pt-32 pb-32 container mx-auto'>
        <section className='py-16'>
        <div className='container mx-auto' >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0  '>
            {filteredProductsElectronics.map((product)=>{
            return(
                <Product product={product} key={product.id}/>
            )
            }
            )}
        </div>

    </div>
    </section>
        </div>
</div>
  )
}
