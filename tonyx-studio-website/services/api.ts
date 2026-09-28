export interface BookingData {
  fullName: string;
  partnerName?: string;
  email: string;
  mobileNumber: string;
  EventDate?: string;
  location: string;
  collectionOfInterest: string;
  tellUsAboutYourDay?: string;
}

export const submitBooking = async (data: BookingData) => {
  const response = await fetch("http://localhost:5000/api/v1/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Failed to submit booking");
  }

  return response.json();
};
