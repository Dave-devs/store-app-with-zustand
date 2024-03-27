import { View, FlatList, StyleSheet, ListRenderItem, Image, Text, TouchableOpacity } from 'react-native';
import { Product } from '@/interface/product';
import { Ionicons } from '@expo/vector-icons';
import { useCartStore } from '@/store/cartStore';

export default function FavouriteScreen() {
  const { addProduct, removeProduct, products } = useCartStore();

  const renderItemView: ListRenderItem<Product & {quantity: number}> = ({item}) => (
    <View style={styles.cartItemContainer}>
      {/* Image */}
      <Image source={{uri: item.image}} style={styles.cartItemImage}/>

      {/* Price & Title */}
      <View style={{flex:1}}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>

      {/* Add,Remove & Quantity Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={{padding:10}} onPress={() => removeProduct(item)}>
          <Ionicons name='remove' size={20} color={'#000'}></Ionicons>
        </TouchableOpacity>

        <Text>{item.quantity}</Text>

        <TouchableOpacity style={{padding:10}} onPress={() => addProduct(item)}>
          <Ionicons name='add' size={20} color={'#000'}></Ionicons>
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <View style={{flex: 1,}}>
      <FlatList data={products} renderItem={renderItemView}/>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItemContainer: {
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    paddingTop:10,
  },
  cartItemImage: {
    height:50,
    width:50,
  },
  cartItemTitle: {
    fontSize:14,
    fontWeight:'bold',
  },
  btnContainer: {
    flexDirection:'row',
    alignItems:'center',
  }
});
