import { userList } from '@/src/screens/data/userData';
import { coachList } from '../screens/data/coachData';
import { WORKOUTFORM } from '../screens/data/data';
import { PAYMENTSFORM } from '../screens/data/data';
import { NOTIFICATIONS } from '../screens/data/data';
import { BRANCHES } from '../screens/data/data';
import { GAMIFICATION } from '../screens/data/data';
import { STORIES } from '../screens/data/data';
import { FROZEN } from '../screens/data/data';
import { SUBSCRIPTION } from '../screens/data/data';
import { STORECATEGORY } from '../screens/data/data';
import { PRODUCTS } from '../screens/data/data';
import { PERSONAL } from '../screens/data/data';
import { GROUP } from '../screens/data/data';
import { CLASSESCATEGORY } from '../screens/data/data';

export const getUserById = async (id) => {
    const localUsers = userList;
    return localUsers.find(user => user.id === id) || null;
};

export const getCoachById = async (id) => {
    const localCoach = coachList;
    return localCoach.find(coach => coach.id === id) || null;
};

export const getScheduleById = async (id) => {
    const localSchedule = WORKOUTFORM;
    return localSchedule.find(scheudle => scheudle.id == id)
}

export const getPaymentsById = async (id) => {
    const localPayments = PAYMENTSFORM;
    return localPayments.find(payments => payments.id == id)
}

export const getNotificationById = async (id) => {
    const localNotification = NOTIFICATIONS;
    return localNotification.find(notification => notification.id == id)
}

export const getBranchById = async (id) => {
    const localBranch = BRANCHES;
    return localBranch.find(branches => branches.id == id)
}

export const getGamificationById = async (id) => {
    const localGamification = GAMIFICATION;
    return localGamification.find(gamification => gamification.id == id)
}

export const getStoriesById = async (id) => {
    const localStories = STORIES;
    return localStories.find(stories => stories.id == id)
}

export const getFrozenById = async (id) => {
    const localFrozen = FROZEN;
    return localFrozen.find(frozen => frozen.id == id)
}

export const getSubscriptionById = async (id) => {
    const localSubscription = SUBSCRIPTION;
    return localSubscription.find(subscription => subscription.id == id)
}

export const getStoreCategoryById = async (id) => {
    const localStoreCategory = STORECATEGORY;
    return localStoreCategory.find(storeCategory => storeCategory.id == id)
}

export const getProductCategoryById = async (id) => {
    const localProduct = PRODUCTS;
    return localProduct.find(product => product.id == id)
}

export const getClassesPersonalById = async (id) => {
    const localPersonal = PERSONAL;
    return localPersonal.find(personal => personal.id == id)
}

export const getClassesGroupById = async (id) => {
    const localGroup = GROUP;
    return localGroup.find(group => group.id == id)
}

export const getClassesCategoryById = async (id) => {
    const localClassesCategory = CLASSESCATEGORY;
    return localClassesCategory.find(category => category.id == id)
}