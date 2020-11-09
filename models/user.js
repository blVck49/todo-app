const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type:String,
               required: true,
            },
   }, {timestamps: true});

      userSchema.virtual('pass')
      .set(function(pass){
          this.password = bcrypt.hashSync(pass, 10);
      });
     userSchema.methods = {
         authenticate: function(pass){
             return bcrypt.compareSync(pass, this.password)
         }
     }


module.exports = mongoose.model('User', userSchema);

