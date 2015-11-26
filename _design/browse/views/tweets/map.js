function(doc) {
    if ('type' in doc && doc.type === 'tweet') {
        emit(doc._id, doc);
    }
}