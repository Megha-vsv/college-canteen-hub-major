# Canteen Images Folder

## Instructions to Add Different Images for Each Canteen

Your app now supports **different images for all 56 canteens**! 

### Option 1: Use Numbered Images (Recommended)

Name your images by canteen number (1 to 56):
- **1.jpg** - Captain Cuisine
- **2.jpg** - Utopia
- **3.jpg** - Capitol
- **4.jpg** - Size Zero
- ... and so on up to...
- **56.jpg** - Dessert Paradise

Just place all 56 images (1.jpg through 56.jpg) in this folder.

### Option 2: Use Canteen Name Images

If you prefer naming by canteen name, uncomment the second option in `script.js`:

In `script.js`, find the `getCanteenImagePath()` function around line 445-453 and change:
```javascript
// Currently using Option 1 (recommended)
return `images/${index + 1}.jpg`;
```

To:
```javascript
// Using Option 2 - Named by canteen
return `images/${canteenName}.jpg`;
```

Then name your images exactly as the canteens:
- **Captain Cuisine.jpg**
- **Utopia.jpg**
- **Capitol.jpg**
- **Size Zero.jpg**
- ... and so on

## Image Requirements

- **Recommended size**: 500x400px or larger
- **Supported formats**: `.jpg`, `.png`, `.webp`
- **Display size**: Images will be cropped to fit the 300x180px card header
- **Aspect ratio**: Any aspect ratio works - images will be centered and cropped

## Canteen List (for reference)

1. Captain Cuisine
2. Utopia
3. Capitol
4. Size Zero
5. Farki
6. Belgian Waffle
7. Cafe Hot Spot
8. Cafe Appetito
9. La Pinoz Pizza
10. Chatoree
11. Konaseema Ruchulu
12. Sri Rudra
13. Indian Salt
14. Rajwadi Gola
15. Cafe Bollywood
16. Krishna Food Canteen
17. Campus Brew
18. Spice Junction
19. Burger Junction
20. Noodle House
21. Dosa Point
22. Juice Bar
23. Sandwich Corner
24. Ice Cream Parlor
25. Momo Point
26. Pav Bhaji Corner
27. Salad Bar
28. Pizza Palace
29. Chaat Corner
30. Healthy Bites
31. Tandoori Hut
32. Quick Bites
33. Cold Cafe
34. Mexican Corner
35. Thai Kitchen
36. Mediterranean Delight
37. Korean Kitchen
38. Sushi Bar
39. Breakfast Club
40. Tea House
41. Waffle House
42. Curry Corner
43. Street Food Hub
44. Healthy Juice
45. Gourmet Kitchen
46. Snack Bar
47. South Indian Delight
48. North Indian Feast
49. Bakery Corner
50. Fast Food Express
51. Soup Kitchen
52. Dessert Paradise

