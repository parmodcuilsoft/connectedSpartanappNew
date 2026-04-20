# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native ProGuard rules
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Firebase rules
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }

# OneSignal rules
-keep class com.onesignal.** { *; }

# React Native Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# React Native Video
-keep class com.brentvatne.react.** { *; }

# React Native WebView
-keep class com.reactnativecommunity.webview.** { *; }

# React Native Animatable (16KB compatible alternative)
-keep class com.oblador.animatable.** { *; }

# Keep native methods
-keepclassmembers class * {
    native <methods>;
}

# Remove logging in release builds
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}

# Optimize and obfuscate
-optimizations !code/simplification/arithmetic,!code/simplification/cast,!field/*,!class/merging/*
-optimizationpasses 5
-allowaccessmodification
-dontpreverify
