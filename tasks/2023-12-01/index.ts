interface Child {
	childId: number;
	gifts: string[];
}

export class GiftRegistry {
	childs: Child[] = [];
	constructor() {
		this.childs = [];
	}

	addGift(childId: number, gift: string) {
		const child = this.childs.find(child => child.childId === childId);

		if (!child) {
			this.childs.push({ childId, gifts: [gift] });
		} else {
			child?.gifts.push(gift);
		}
	}

	removeGift(childId: number, gift: string) {
		const child = this.childs.find(child => child.childId === childId);

		if (!child) {
			throw new Error('Child not found');
		}

		const giftIndex = child?.gifts.indexOf(gift);

		if (giftIndex === -1) {
			throw new Error('Gift not found');
		} else {
			child?.gifts.splice(giftIndex, 1);
		}
	}

	getGiftsForChild(childId: number) {
		const child = this.childs.find(child => child.childId === childId);
		const gifts = child?.gifts;
		return gifts;
	}
}
