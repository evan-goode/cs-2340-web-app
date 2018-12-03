const API_ENDPOINT = "https://www.ridgefieldttt.com/2340api.php";

const parseCsv = contents => {
    const lines = contents.split("\n");
    return lines.filter(line => line.length).map(line => {
        return line.split(",");
    });
}

export const getDonations = async http => {
    const donationResponse = await http.get(API_ENDPOINT, { src: "donations" }, {});
    const donationEntries = parseCsv(donationResponse.data);

    return donationEntries.map((entry, index) => ({
        id: index,
        locationId: parseInt(entry[0]),
        item: entry[1],
        date: entry[2],
        locationName: entry[3],
        user: entry[4],
        fullDescription: entry[5],
        value: entry[6],
        category: entry[7],
    }));
};

export const getLocations = async http => {
    const locationResponse = await http.get(API_ENDPOINT, { src: "locations" }, {});
    const locationEntries = parseCsv(locationResponse.data);

    const allDonations = await getDonations(http);

    return locationEntries.map(locationEntry => {
        const id = parseInt(locationEntry[10]);
        const donations = allDonations.filter(donation => {
            return donation.locationId === id;
        });
        return {
            id,
            donations,
            name: locationEntry[0],
            type: locationEntry[1],
            zip: locationEntry[2],
            phone: locationEntry[3],
            state: locationEntry[4],
            address: locationEntry[5],
            website: locationEntry[6],
            latitude: locationEntry[7],
            longitude: locationEntry[8],
            city: locationEntry[9],
        };
    });
};

export const getDonation = async (http, donationId) => {
    return (await getDonations(http)).find(donation => (
        donation.id === donationId
    ));
};

export const getLocation = async (http, locationId) => {
    return (await getLocations(http)).find(location => (
        location.id === locationId
    ));
};

export const newDonation = async (http, donation) => {
    const response = await http.post(API_ENDPOINT, {
        dest: "donations",
        locid: donation.locationId,
        location: donation.locationName,
        item: donation.item,
        date: donation.date,
        user: donation.user,
        fulldesc: donation.fullDescription,
        value: donation.value,
        category: donation.category,
    }, {});
    console.log({response});
};
