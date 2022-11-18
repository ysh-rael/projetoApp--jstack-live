import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
    Product,
    ProductDetails,
    ProductImage,
    Separator,
    AddCardButton
} from './styles';


export function Menu() {
    return (
        <FlatList
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            ItemSeparatorComponent={Separator}
            data={products}
            keyExtractor={product => product._id}
            renderItem={({ item: product }) => (
                <Product>
                    <ProductImage
                        source={{
                            uri: `http://192.168.0.94:3002/uploads/${product.imagePath}`
                        }}
                    />
                    <ProductDetails>
                        <Text weight='600'>{product.name}</Text>
                        <Text size={14} color='#666' style={{marginVertical: 8}}>{product.description}</Text>
                        <Text size={14} weight='600' >{
                            formatCurrency(product.price)
                        }</Text>
                    </ProductDetails>

                    <AddCardButton>
                        <PlusCircle/>
                    </AddCardButton>
                </Product>
            )}
        />
    );
}