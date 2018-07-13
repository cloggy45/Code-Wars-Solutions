var Block = function(dimensions) {
    this._width = dimensions[0];
    this._length = dimensions[1];
    this._height = dimensions[2];
};

Block.prototype.getWidth = function() {
    return this._width;
};

Block.prototype.getLength = function () {
    return this._length;
};

Block.prototype.getHeight = function () {
    return this._height;
};

Block.prototype.getVolume = function () {
    return this._length * this._width * this._height;
};

Block.prototype.getSurfaceArea = function () {
    return 2 * (this._width * this._length + this._length * this._height + this._width * this._height);
};