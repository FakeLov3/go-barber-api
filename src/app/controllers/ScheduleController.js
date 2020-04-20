import { startOfDay, endOfDay, parseISO, parse } from 'date-fns';
import { Op } from 'sequelize';

import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
    async index(req, res) {
        const checkUserProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!checkUserProvider) {
            return res.status(401).json({ error: 'User is not a provider' });
        }

        const { date } = req.query;
        const parsedDate = parseISO(date);

        /**
         * Date start 2020-04-20 00:00:00
         * Date end 2020-04-20 23:59:59
         */

        const appointments = await Appointment.findAll({
            where: {
                provider_id: req.userId,
                canceled_at: null,
                date: {
                    [Op.between]: [
                        startOfDay(parsedDate),
                        endOfDay(parsedDate),
                    ],
                },
            },
            order: ['date'],
        });

        return res.json(appointments);
    }
}

export default new ScheduleController();
