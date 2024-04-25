const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const practitionerSchema = new Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    location: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const Practitioner = mongoose.model('Practitioner', practitionerSchema);

module.exports = Practitioner;