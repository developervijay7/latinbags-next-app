export interface CartItem {
    id: string
    name: string
    price: number
    image: string
    qty: number
}

const CART_KEY = "latinbags_cart"

export function getCart(): CartItem[] {
    if (typeof window === "undefined") return []
    const cart = localStorage.getItem(CART_KEY)
    return cart ? JSON.parse(cart) : []
}

export function addToCart(item: CartItem) {
    const cart = getCart()

    const existing = cart.find((p) => p.id === item.id)

    if (existing) {
        existing.qty += 1
    } else {
        cart.push(item)
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart))

    window.dispatchEvent(new CustomEvent("cartUpdated"))
    window.dispatchEvent(new CustomEvent("cartAnimate"))
}

export function getCartCount() {
    const cart = getCart()
    return cart.reduce((acc, item) => acc + item.qty, 0)
}