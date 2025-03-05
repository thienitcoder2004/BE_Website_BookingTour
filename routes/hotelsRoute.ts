import express, { Request, Response } from "express";
import Hotel, { IHotel } from "../models/HotelSchema";

const router = express.Router();

// Create
router.post("/", async (req: Request, res: Response) => {
    try {
        const newHotel: IHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

// Put
router.put("/:id", async (req: Request, res: Response): Promise<Response | any> => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedHotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        return res.status(200).json(updatedHotel);
    } catch (err) {
        return res.status(500).json({ message: (err as Error).message });
    }
});

// Delete
router.delete("/:id", async (req: Request, res: Response) :Promise<Request | any> => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!deletedHotel) {
            return res.status(404).json({ message: "Hotel not deletSe" });
        }
        return res.status(200).json(deletedHotel);
    } catch (err) {
        return res.status(500).json({ message: (err as Error).message });
    }
})


router.get("/", async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
})

export default router;
