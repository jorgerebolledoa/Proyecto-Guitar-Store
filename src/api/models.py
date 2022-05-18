from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    nameAdm = db.Column(db.String(50), nullable=False)
    password = db.Column(db.Integer, nullable=False)
    passwordAdm = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    default_shipping_address = db.Column(db.Integer, nullable=False)


class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String(250), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    thumbnail = db.Column(db.String(250), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("Category.id"))
    categories = db.relationship("Category")


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    thumbnail = db.Column(db.String(250), nullable=False)


class Order(db.Model):
    __tablename__ = "Order"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("User.id"))
    amount = db.Column(db.Integer, primary_key=True)
    shipping_address = db.Column(db.Integer, primary_key=True)
    order_addres = db.Column(db.Integer, primary_key=True)
    order_date = db.Column(db.Integer, primary_key=True)
    order_email = db.Column(db.String(250), nullable=False)
    order_status = db.Column(db.String(250), nullable=False)
    user = db.relationship("User")


class OrderDetail(db.Model):
    __tablename__ = "order_details"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("Order.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("Product.id"))
    price = db.Column(db.Integer, primary_key=True)
    quatity = db.Column(db.Integer, primary_key=True)
    order = db.relationship("Order")
    products = db.relationship("Product")


class Messsage(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("User.id"))
    message = db.Column(db.String(250), nullable=False)
    user = db.relationship('User')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
