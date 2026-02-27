# Images

> Source: [https://developer.apple.com/design/human-interface-guidelines/images](https://developer.apple.com/design/human-interface-guidelines/images)

---

To make sure your artwork looks great on all devices you support, learn how the system displays content and how to deliver art at the appropriate scale factors.

## Resolution

Different devices can display images at different resolutions. A point is an abstract unit of measurement that helps visual content remain consistent regardless of how it's displayed. In 2D platforms, a point maps to a number of pixels that can vary according to the resolution of the display.

When creating bitmap images, you specify a scale factor which determines the resolution of an image. You can visualize scale factor by considering the density of pixels per point in 2D displays of various resolutions. For example, a scale factor of 1 (also called @1x) describes a 1:1 pixel density, where one pixel is equal to one point. High-resolution 2D displays have higher pixel densities, such as 2:1 or 3:1. A 2:1 density (called @2x) has a scale factor of 2, and a 3:1 density (called @3x) has a scale factor of 3. Because of higher pixel densities, high-resolution displays demand images with more pixels.

Provide high-resolution assets for all bitmap images in your app, for every device you support. As you add each image to your project's asset catalog, identify its scale factor by appending "@1x," "@2x," or "@3x" to its filename.

Use the following values for guidance:

| Platform | Scale factors |
|----------|---------------|
| Mobile | @2x and @3x |
| Desktop | @1x and @2x |

In general, design images at the lowest resolution and scale them up to create high-resolution assets. When you use resizable vectorized shapes, you might want to position control points at whole values so that they're cleanly aligned at 1x. This positioning allows the points to remain cleanly aligned to the raster grid at higher resolutions, because 2x and 3x are multiples of 1x.

## Formats

As you create different types of images, consider the following recommendations.

| Image type | Format |
|------------|--------|
| Bitmap or raster work | De-interlaced PNG files |
| PNG graphics that don't require full 24-bit color | 8-bit color palette |
| Photos | JPEG files, optimized as necessary |
| Flat icons, interface icons, and other flat artwork that requires high-resolution scaling | PDF or SVG files |

## Best practices

Include a color profile with each image. Color profiles help ensure that your app's colors appear as intended on different displays.

Always test images on a range of actual devices. An image that looks great at design time may appear pixelated, stretched, or compressed when viewed on various devices.

## Platform considerations

No additional considerations for mobile or desktop platforms.
