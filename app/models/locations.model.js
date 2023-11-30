module.exports = mongoose => {
    const Location = mongoose.model(
        "locations",
        mongoose.Schema(
            {
                latitude: String,
                longitude: String,
                stepCount: String,
                user: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Location;
};
