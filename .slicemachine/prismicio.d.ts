// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Section Title field in *About*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.section_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    section_title: prismicT.RichTextField;
    /**
     * Image field in *About*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Bio field in *About*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Selected Works documents */
interface SelectedWorksDocumentData {
    /**
     * Work field in *Selected Works*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.work[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    work: prismicT.GroupField<Simplify<SelectedWorksDocumentDataWorkItem>>;
    /**
     * Meta Title field in *Selected Works*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.meta_title
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Selected Works*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.meta_description
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Item in Selected Works → Work
 *
 */
export interface SelectedWorksDocumentDataWorkItem {
    /**
     * Cover Image field in *Selected Works → Work*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.work[].cover_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cover_image: prismicT.ImageField<"widescreen">;
    /**
     * Title field in *Selected Works → Work*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.work[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Client field in *Selected Works → Work*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.work[].client
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    client: prismicT.KeyTextField;
    /**
     * Video field in *Selected Works → Work*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.work[].video
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    video: prismicT.EmbedField;
    /**
     * Preview field in *Selected Works → Work*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: selected_works.work[].preview
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    preview: prismicT.EmbedField;
}
/**
 * Selected Works document from Prismic
 *
 * - **API ID**: `selected_works`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SelectedWorksDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SelectedWorksDocumentData>, "selected_works", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Email Address field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.email_address
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email_address: prismicT.KeyTextField;
    /**
     * Links field in *Settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<SettingsDocumentDataLinksItem>>;
}
/**
 * Item in Settings → Links
 *
 */
export interface SettingsDocumentDataLinksItem {
    /**
     * Label field in *Settings → Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Settings → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
/** Content for Stills documents */
interface StillsDocumentData {
    /**
     * Images field in *Stills*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: stills.images[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    images: prismicT.GroupField<Simplify<StillsDocumentDataImagesItem>>;
}
/**
 * Item in Stills → Images
 *
 */
export interface StillsDocumentDataImagesItem {
    /**
     * Image field in *Stills → Images*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: stills.images[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Stills document from Prismic
 *
 * - **API ID**: `stills`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StillsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<StillsDocumentData>, "stills", Lang>;
export type AllDocumentTypes = AboutDocument | SelectedWorksDocument | SettingsDocument | StillsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocument, SelectedWorksDocumentData, SelectedWorksDocumentDataWorkItem, SelectedWorksDocument, SettingsDocumentData, SettingsDocumentDataLinksItem, SettingsDocument, StillsDocumentData, StillsDocumentDataImagesItem, StillsDocument, AllDocumentTypes };
    }
}
