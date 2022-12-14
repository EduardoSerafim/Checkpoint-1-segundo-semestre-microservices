const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getProduct = async () => {
    const result = await Product.find({}, 'title price description _id active');

    return result;
}

exports.create = async(data) =>{
    console.log(data);
    const produto = Product(data)
    await produto.save()
}

exports.put = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active

        }
    })
}

exports.getById = async(id) =>{
    const result = await Product.findOne({_id: id}, "_id title description price active")
    return result
}

exports.delete = async(id) => {
    await Product.findByIdAndUpdate(id,{
        $set:{
            active:false
        }
    })
    
}