"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Product, Category, Order, Order_detail, Messsage
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import datetime


# Create flask app
api = Blueprint('api', __name__)

# ------------------
#  Login y Register
# ------------------


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"message": "Email/Password incorrect!"}), 401
    if not check_password_hash(user.password, password):
        return jsonify({"message": "Email/Password incorrect!"}), 401

    expires = datetime.timedelta(minutes=30)
    access_token = create_access_token(identity=user.id, expires_delta=expires)

    data = {"status": "Success!",
            "message": "Logged in succesfully!", 
            "access_token": access_token,
            "user": user.serialize()
            }

    return jsonify(data), 200


#@api.route('/register', methods=['POST'])
#def register():

#    name = request.json.get("name")
#    email = request.json.get("email")
#    address = request.json.get("address")
#    city = request.json.get("city")
#    country = request.json.get("country")
#    phone = request.json.get("phone") 
#    password = request.json.get("password")

#    user = User.query.filter_by(email=email).first()

#    user = User()
#    user.name = name
#    user.email = email 
#    user.address = address
#    user.city = city
#    user.country = country
#    user.phone = phone
#    user.password = generate_password_hash(password)
#    user.save()

#    return jsonify({"status": "Success!", "message": "Register succesfully!"}), 200

#    if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 400

#    access_token = create_access_token(identity=user.id)

#    data = {
#            "access_token": access_token,
#            "user": user.serialize()
 #       }

  #  if user: return jsonify(data), 201



# ------------------
#              Roles
# ------------------

@api.route("/roles", methods=['GET'])
def get_roles():
    roles = Role.query.all()
    roles = list(map(lambda role: role.serialize(), roles))
    return jsonify(roles), 200


@api.route("/roles/<int:role_id>", methods=['GET'])
def get_role(role_id):
    roles = Role.query.get(role_id)
    roles = list(map(lambda role: role.serialize(), roles))
    return jsonify(roles), 200


@api.route('/roles', methods=['POST'])
def create_role():
    role = Role()
    role.name = request.json.get('name')
    role.save()
    return jsonify(role.serialize()), 201


@api.route('/roles/<int:roles_id>', methods=['DELETE'])
def delete_roles(roles_id):
    roles = Role.query.get(roles_id)
    roles.delete()
    return jsonify(roles.serialize()), 201

# ------------------
#              Users
# check_password_hash  <---- para el proceso de login
# ------------------
@api.route("/profile", methods=['GET'])
@jwt_required()
def profile():
    id = get_jwt_identity()
    users = User.query.get(id)
    return jsonify(user.serialize()), 200


@api.route("/users", methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200


@api.route('/users', methods=['POST'])
def create_user():
    
    name = request.json.get('name')
    password = request.json.get("password")
    email = request.json.get('email')
    phone = request.json.get('phone')
    country = request.json.get('country')
    city = request.json.get('city')
    address = request.json.get('address')
    role_id = request.json.get('role_id')

    user = User.query.filter_by(email=email).first()

    user = User()
    user.name = name
    user.email = email 
    user.address = address
    user.city = city
    user.country = country
    user.phone = phone
    user.password = generate_password_hash(password)
    user.save()


    return jsonify({"status": "Success!", "message": "Register succesfully!"}), 200

    if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 400

    access_token = create_access_token(identity=user.id)

    data = {
            "access_token": access_token,
            "user": user.serialize()
        }

    if user: return jsonify(data), 201
    
    


@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    user.name = request.json.get('name')
    user.password = request.json.get('password')
    user.email = request.json.get('email')
    user.phone = request.json.get('phone')
    user.country = request.json.get('country')
    user.city = request.json.get('city')
    user.address = request.json.get('address')
    user.role_id = request.json.get('role_id')
    user.update()
    return jsonify(user.serialize()), 201


@api.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    user.delete()
    return jsonify(user.serialize()), 201

# ------------------
#           Products
# ------------------


@api.route("/products", methods=['GET'])
def get_products():
    products = Product.query.all()
    products = list(map(lambda product: product.serialize(), products))
    return jsonify(products), 200


@api.route("/products/id/<int:products_id>", methods=['GET'])
def get_products_by_id(products_id):
    products = Product.query.get(products_id)
    return jsonify(products.serialize()), 200


@api.route("/products/id_categori/<int:category_id>", methods=['GET'])
def get_products_by_category_id(category_id):
    products = Product.query.filter_by(category_id=category_id)
    products = list(map(lambda product: product.serialize(), products))
    return jsonify(products), 200


@api.route('/products', methods=['POST'])
def create_products():
    products = Product()
    products.sku = request.json.get('sku')
    products.name = request.json.get('name')
    products.img1 = request.json.get('img1')
    products.img2 = request.json.get('img2')
    products.img3 = request.json.get('img3')
    products.img4 = request.json.get('img4')
    products.description_1 = request.json.get('description_1')
    products.description_2 = request.json.get('description_2')
    products.description_3 = request.json.get('description_3')
    products.description_4 = request.json.get('description_4')
    products.tittle_description_1 = request.json.get('tittle_description_1')
    products.tittle_description_2 = request.json.get('tittle_description_2')
    products.tittle_description_3 = request.json.get('tittle_description_3')
    products.tittle_description_4 = request.json.get('tittle_description_4')
    products.price = request.json.get('price')
    products.thumbnail = request.json.get('thumbnail')
    products.category_id = request.json.get('category_id')
    products.save()
    return jsonify(products.serialize()), 201


@api.route('/products/<int:products_id>', methods=['PUT'])
def update_products(products_id):
    products = Product.query.get(products_id)
    products.sku = request.json.get('sku')
    products.name = request.json.get('name')
    products.img1 = request.json.get('img1')
    products.img2 = request.json.get('img2')
    products.img3 = request.json.get('img3')
    products.img4 = request.json.get('img4')
    products.description_1 = request.json.get('description_1')
    products.description_2 = request.json.get('description_2')
    products.description_3 = request.json.get('description_3')
    products.description_4 = request.json.get('description_4')
    products.tittle_description_1 = request.json.get('tittle_description_1')
    products.tittle_description_2 = request.json.get('tittle_description_2')
    products.tittle_description_3 = request.json.get('tittle_description_3')
    products.tittle_description_4 = request.json.get('tittle_description_4')
    products.price = request.json.get('price')
    products.thumbnail = request.json.get('thumbnail')
    products.update()
    return jsonify(products.serialize()), 201


@api.route('/products/<int:products_id>', methods=['DELETE'])
def delete_products(products_id):
    products = Product.query.get(products_id)
    products.delete()
    return jsonify(products.serialize()), 201

# ------------------
#          Category
# ------------------


@api.route("/categories", methods=['GET'])
def get_categories():
    categories = Category.query.all()
    categories = list(map(lambda category: category.serialize(), categories))
    return jsonify(categories), 200


@api.route('/categories', methods=['POST'])
def create_categories():
    categories = Category()
    categories.name = request.json.get('name')
    categories.description = request.json.get('description')
    categories.thumbnail = request.json.get('thumbnail')
    categories.image = request.json.get('image')
    categories.save()
    return jsonify(categories.serialize()), 201


@api.route('/categories/<int:categories_id>', methods=['PUT'])
def update_categories(categories_id):
    categories = Category.query.get(categories_id)
    categories.name = request.json.get('name')
    categories.description = request.json.get('description')
    categories.thumbnail = request.json.get('thumbnail')
    categories.image = request.json.get('image')
    categories.update()
    return jsonify(categories.serialize()), 201


@api.route('/categories/<int:categories_id>', methods=['DELETE'])
def delete_categories(categories_id):
    categories = Category.query.get(categories_id)
    categories.delete()
    return jsonify(categories.serialize()), 201

# ------------------
#         Orders
# ------------------


@api.route("/orders", methods=['GET'])
def get_orders():
    orders = Order.query.all()
    orders = list(map(lambda role: order.serialize(), orders))
    return jsonify(orders), 200


@api.route('/orders', methods=['POST'])
def create_orders():
    orders = Order()
    orders.amount = request.json.get('amount')
    orders.shipping_address = request.json.get('shipping_address')
    orders.order_address = request.json.get('order_address')
    orders.order_date = request.json.get('order_date')
    orders.order_email = request.json.get('order_email')
    orders.order_status = request.json.get('order_status')

    orders.save()
    return jsonify(orders.serialize()), 201


@api.route('/orders/<int:orders_id>', methods=['PUT'])
def update_orders(orders_id):
    orders = Order.query.get(orders_id)
    orders.amount = request.json.get('amount')
    orders.shipping_address = request.json.get('shipping_address')
    orders.order_address = request.json.get('order_address')
    orders.order_date = request.json.get('order_date')
    orders.order_email = request.json.get('order_email')
    orders.order_status = request.json.get('order_status')
    orders.update()
    return jsonify(orders.serialize()), 201


@api.route('/orders/<int:orders_id>', methods=['DELETE'])
def delete_orders(orders_id):
    orders = Order.query.get(orders_id)
    orders.delete()
    return jsonify(orders.serialize()), 201

# ------------------
#      Order Details
# ------------------


@api.route("/order_details", methods=['GET'])
def get_order_details():
    order_details = Order_detail.query.all()
    order_details = list(map(lambda role: order.serialize(), order_details))
    return jsonify(order_details), 200


@api.route('/order_details', methods=['POST'])
def create_order_details():
    order_details = Order_detail()
    order_details.amount = request.json.get('amount')
    order_details.shipping_address = request.json.get('shipping_address')
    order_details.order_address = request.json.get('order_address')
    order_details.order_date = request.json.get('order_date')
    order_details.order_email = request.json.get('order_email')
    order_details.order_status = request.json.get('order_status')

    order_details.save()
    return jsonify(order_details.serialize()), 201


@api.route('/order_details/<int:order_details_id>', methods=['PUT'])
def update_order_details(order_details_id):
    order_details = Order_detail.query.get(order_details_id)
    order_details.amount = request.json.get('amount')
    order_details.shipping_address = request.json.get('shipping_address')
    order_details.order_address = request.json.get('order_address')
    order_details.order_date = request.json.get('order_date')
    order_details.order_email = request.json.get('order_email')
    order_details.order_status = request.json.get('order_status')
    order_details.update()
    return jsonify(order_details.serialize()), 201


@api.route('/order_details/<int:order_details_id>', methods=['DELETE'])
def delete_order_details(order_details_id):
    order_details = Order_detail.query.get(order_details_id)
    order_details.delete()
    return jsonify(order_details.serialize()), 201

# ------------------
#         Messages
# ------------------


@api.route("/messages", methods=['GET'])
def get_messages():
    messages = Messsage.query.all()
    messages = list(map(lambda role: messages.serialize(), messages))
    return jsonify(messages), 200


@api.route('/messages', methods=['POST'])
def create_messages():
    messages = Messsage()
    messages.email = request.json.get('email')
    messages.message = request.json.get('message')

    messages.save()
    return jsonify(messages.serialize()), 201


@api.route('/messages/<int:messages_id>', methods=['DELETE'])
def delete_messages(messages_id):
    messages = Messsage.query.get(messages_id)
    messages.delete()
    return jsonify(messages.serialize()), 201
