import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technique } from 'src/app/classes/stix/technique';
import { StixViewPage } from '../../stix-view-page';
import { Relationship } from 'src/app/classes/stix/relationship';

@Component({
  selector: 'app-technique-view',
  templateUrl: './technique-view.component.html',
  styleUrls: ['./technique-view.component.scss']
})
export class TechniqueViewComponent extends StixViewPage implements OnInit {

    public editing: boolean = false;
    public tactics;

    public technique: Technique = new Technique ({
        "created_by_ref": "identity--c78cb6e5-0c4b-4611-8297-d1b8b55e40b5", 
        "name": "Defacement", 
        "created": "2019-04-08T17:51:41.390Z", 
        "x_mitre_platforms": [
            "Linux", 
            "macOS", 
            "Windows"
        ], 
        "type": "attack-pattern", 
        "x_mitre_domains": [
            "enterprise"
        ], 
        "x_mitre_impact_type": [
            "Integrity"
        ], 
        "kill_chain_phases": [
            {
                "phase_name": "impact", 
                "kill_chain_name": "mitre-attack"
            }
        ], 
        "modified": "2019-07-19T14:35:43.812Z", 
        "x_mitre_detection": "Monitor internal and external websites for unplanned content changes. Monitor application logs for abnormal behavior that may indicate attempted or successful exploitation. Use deep packet inspection to look for artifacts of common exploit traffic, such as SQL injection. Web Application Firewalls may detect improper inputs attempting exploitation.\n\n", 
        "spec_version": "2.1", 
        "object_marking_refs": [
            "marking-definition--fa42a846-8d90-4e51-bc29-71d5b4802168"
        ], 
        "external_references": [
            {
                "url": "https://attack.mitre.org/techniques/T1491", 
                "external_id": "T1491", 
                "source_name": "mitre-attack"
            }, 
            {
                "url": "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Report.pdf", 
                "source_name": "Novetta Blockbuster", 
                "description": "Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Unraveling the Long Thread of the Sony Attack. Retrieved February 25, 2016."
            }, 
            {
                "url": "https://operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Destructive-Malware-Report.pdf", 
                "source_name": "Novetta Blockbuster Destructive Malware", 
                "description": "Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Destructive Malware Report. Retrieved March 2, 2016."
            }, 
            {
                "url": "https://www.fireeye.com/content/dam/fireeye-www/current-threats/pdfs/ib-entertainment.pdf", 
                "source_name": "FireEye Cyber Threats to Media Industries", 
                "description": "FireEye. (n.d.). Retrieved April 19, 2019."
            }, 
            {
                "url": "https://www.intelligence.senate.gov/sites/default/files/documents/os-kmandia-033017.pdf", 
                "source_name": "Kevin Mandia Statement to US Senate Committee on Intelligence", 
                "description": "Kevin Mandia. (2017, March 30). Prepared Statement of Kevin Mandia, CEO of FireEye, Inc. before the United States Senate Select Committee on Intelligence. Retrieved April 19, 2019."
            }, 
            {
                "url": "https://torrentfreak.com/anonymous-hackers-deface-russian-govt-site-to-protest-web-blocking-nsfw-180512/", 
                "source_name": "Anonymous Hackers Deface Russian Govt Site", 
                "description": "Andy. (2018, May 12). \u2018Anonymous\u2019 Hackers Deface Russian Govt. Site to Protest Web-Blocking (NSFW). Retrieved April 19, 2019."
            }, 
            {
                "url": "https://documents.trendmicro.com/assets/white_papers/wp-a-deep-dive-into-defacement.pdf", 
                "source_name": "Trend Micro Deep Dive Into Defacement", 
                "description": "Marco Balduzzi, Ryan Flores, Lion Gu, Federico Maggi, Vincenzo Ciancaglini, Roel Reyes, Akira Urano. (n.d.). A Deep Dive into Defacement: How Geopolitical Events Trigger Web Attacks. Retrieved April 19, 2019."
            }
        ], 
        "x_mitre_collections": [
            "x_mitre_collection--11c94726-c9dd-4660-b5f1-f8169e2604e1"
        ],
        "x_mitre_version": "1.0", 
        "x_mitre_data_sources": [
            "Packet capture", 
            "Web application firewall logs", 
            "Web logs", 
            "Packet capture"
        ], 
        "id": "attack-pattern--5909f20f-3c39-4795-be06-ef1ea40d350b", 
        "description": "Adversaries may modify visual content available internally or externally to an enterprise network. Reasons for Defacement include delivering messaging, intimidation, or claiming (possibly false) credit for an intrusion. \n\n### Internal\nAn adversary may deface systems internal to an organization in an attempt to intimidate or mislead users. This may take the form of modifications to internal websites, or directly to user systems with the replacement of the desktop wallpaper.(Citation: Novetta Blockbuster) Disturbing or offensive images may be used as a part of Defacement in order to cause user discomfort, or to pressure compliance with accompanying messages. While internally defacing systems exposes an adversary's presence, it often takes place after other intrusion goals have been accomplished.(Citation: Novetta Blockbuster Destructive Malware)\n\n### External \nWebsites are a common victim of defacement; often targeted by adversary and hacktivist groups in order to push a political message or spread propaganda.(Citation: FireEye Cyber Threats to Media Industries)(Citation: Kevin Mandia Statement to US Senate Committee on Intelligence)(Citation: Anonymous Hackers Deface Russian Govt Site) Defacement may be used as a catalyst to trigger events, or as a response to actions taken by an organization or government. Similarly, website defacement may also be used as setup, or a precursor, for future attacks such as [Drive-by Compromise](https://attack.mitre.org/techniques/T1189).(Citation: Trend Micro Deep Dive Into Defacement)\n"
    })

    public subtechniques: Relationship[];
    public mitigations: Relationship[] = [
        new Relationship(
            {
                "created_by_ref": "identity--c78cb6e5-0c4b-4611-8297-d1b8b55e40b5", 
                "x_mitre_domains": [
                    "enterprise"
                ], 
                "created": "2017-05-31T21:33:27.026Z", 
                "x_mitre_collections": [
                    "x_mitre_collection--11c94726-c9dd-4660-b5f1-f8169e2604e1"
                ], 
                "spec_version": "2.1", 
                "modified": "2019-07-24T14:13:23.722Z", 
                "target_ref": "attack-pattern--5909f20f-3c39-4795-be06-ef1ea40d350b", 
                "object_marking_refs": [
                    "marking-definition--fa42a846-8d90-4e51-bc29-71d5b4802168"
                ], 
                "relationship_type": "mitigates", 
                "x_mitre_version": "1.0", 
                "type": "relationship", 
                "id": "relationship--483a70b9-eae9-4d5f-925c-95c2dd7b9fa5", 
                "source_ref": "course-of-action--beb45abb-11e8-4aef-9778-1f9ac249784f"
            }
        )
    ];
    public groups: Relationship[];
    public software: Relationship[];

    constructor(private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.editing = params["editing"];
        });
    }
}
