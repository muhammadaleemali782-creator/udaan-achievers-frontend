package com.educainstitute.app;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                WebSettings settings = webView.getSettings();
                settings.setDomStorageEnabled(true);
                settings.setDatabaseEnabled(true);
                settings.setCacheMode(WebSettings.LOAD_DEFAULT);
                settings.setUseWideViewPort(true);
                settings.setLoadWithOverviewMode(true);
                webView.setVerticalScrollBarEnabled(true);
                webView.setHorizontalScrollBarEnabled(false);
                webView.setOverScrollMode(WebView.OVER_SCROLL_IF_CONTENT_SCROLLS);
                webView.setScrollBarStyle(WebView.SCROLLBARS_INSIDE_OVERLAY);
            }
        } catch (Exception ignored) {}
    }
}
