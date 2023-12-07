module.exports = mongoose => {
    const Location = mongoose.model(
        "locations",
        mongoose.Schema(
            {
                latitude: String,
                longitude: String,
                stepCount: String,
                user: String,
                timeRemaining: String,
                verifindId:String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Location;
};
