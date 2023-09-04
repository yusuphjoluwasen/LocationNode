module.exports = mongoose => {
    const Location = mongoose.model(
        "locations",
        mongoose.Schema(
            {
                latitude: String,
                longitude: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Location;
};
