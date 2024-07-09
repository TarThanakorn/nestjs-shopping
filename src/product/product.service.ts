import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    private products: ProductDTO[] =
        [
            { id: 1, name: 'Apple', price: 250, image: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg', rating: 5.0 },
            { id: 2, name: 'PineApple', price: 250, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EZenExcPl5a_leFkFbwu5jGw2Dv3dmI2fw&s', rating: 4.8 },
            { id: 3, name: 'Mango', price: 150, image: 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg', rating: 4.3 },
            { id: 4, name: 'Orange', price: 75 ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s', rating: 4.7 },
        ];

    findAll(): ProductDTO[] {
        return this.products;
    }
    findById(id: number) {
        return this.products.find((p) => p.id === id);
    }
    findByCondition(predicate: (product: ProductDTO) => boolean) {
        return this.products.filter(p =>
            predicate(p)
        )
    }
}
